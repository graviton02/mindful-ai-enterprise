import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { VISION_POINTS } from '../constants';
import { VisionPoint } from '../types';

const VisionCloud: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous render
    d3.select(svgRef.current).selectAll("*").remove();

    const container = svgRef.current.parentElement;
    const width = container ? container.clientWidth : 800;
    const height = 600;
    const centerX = width / 2;
    const centerY = height / 2;

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("style", "max-width: 100%; height: auto; overflow: visible;");

    // Improved high-contrast palette based on the reference image
    // Dark Greens, Brand Green, Deep Orange, Dark Blue-Gray
    const colors = [
      '#1B5E20', // Very Dark Green
      '#2E7D32', // Dark Green
      '#F57F17', // Deep Orange (for emphasis)
      '#263238', // Dark Blue Gray
      '#43A047', // Brand Green
    ];

    // Simulation nodes
    const nodes = VISION_POINTS.map(d => ({ ...d }));

    // Force simulation
    const simulation = d3.forceSimulation<VisionPoint & d3.SimulationNodeDatum>(nodes)
      .force("charge", d3.forceManyBody().strength(-80)) // Stronger repulsion to separate words
      .force("center", d3.forceCenter(centerX, centerY))
      .force("y", d3.forceY(centerY).strength(0.05))
      // Targeted X positioning
      .force("x", d3.forceX((d) => {
        // Explicitly pull "Outcome-Driven" to the left
        if (d.text.includes("Outcome-Driven")) return centerX - width * 0.25;
        // Explicitly pull "Resilient Data" to the right to balance
        if (d.text.includes("Resilient Data")) return centerX + width * 0.25;
        // Default center pull for others
        return centerX;
      }).strength((d) => {
         // Apply stronger force for the targeted items
         if (d.text.includes("Outcome-Driven") || d.text.includes("Resilient Data")) return 0.2;
         return 0.05;
      }))
      .force("collision", d3.forceCollide().radius(d => (d.size * 4)).strength(1)); // Increased radius for better separation

    const nodeGroup = svg.append("g");

    // Create groups for each node
    const node = nodeGroup.selectAll("g")
      .data(nodes)
      .join("g")
      .attr("cursor", "default")
      .on("mouseover", function() {
        d3.select(this).select("text")
          .transition().duration(200)
          .style("opacity", 0.8)
          .attr("transform", "scale(1.05)");
      })
      .on("mouseout", function() {
        d3.select(this).select("text")
          .transition().duration(200)
          .style("opacity", 1)
          .attr("transform", "scale(1)");
      });

    // Draw text (Word Cloud Style)
    node.append("text")
      .text(d => d.text)
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .style("font-size", d => `${Math.max(16, d.size)}px`)
      .style("font-weight", "700") // Bolder for visibility
      .style("font-family", "'Inter', sans-serif")
      .style("fill", (d, i) => {
        // Specific mapping for visual variety similar to reference, or cycling
        if (d.text.includes("Intelligence")) return '#2E7D32'; 
        if (d.text.includes("Embedded")) return '#F57F17'; // Orange pop
        if (d.text.includes("Responsible")) return '#F9A825'; // Lighter orange
        return colors[i % colors.length];
      })
      .style("text-shadow", "0px 1px 0px rgba(255,255,255,1), 0px 0px 20px rgba(255,255,255,0.5)") // White outline/glow for contrast
      .call(wrapText); 

    // Simulation tick update
    simulation.on("tick", () => {
      node.attr("transform", d => {
        // Keep within bounds
        const padding = 80;
        d.x = Math.max(padding, Math.min(width - padding, d.x || 0));
        d.y = Math.max(padding, Math.min(height - padding, d.y || 0));
        return `translate(${d.x},${d.y})`;
      });
    });

    // Text wrapping helper
    function wrapText(textSelection: any) {
      textSelection.each(function(this: SVGTextElement, d: any) {
        const text = d3.select(this);
        const words = d.text.split(/\s+/).reverse();
        let word;
        let line: string[] = [];
        let lineNumber = 0;
        const lineHeight = 1.1; // ems
        const y = text.attr("y") || 0;
        // Reset text
        text.text(null);
        
        let tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", 0 + "em");
        
        // Define width constraint relative to size
        const width = d.size * 6; 

        while (word = words.pop()) {
          line.push(word);
          tspan.text(line.join(" "));
          if ((tspan.node()?.getComputedTextLength() || 0) > width && line.length > 1) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + "em").text(word);
          }
        }
        
        // Center vertically based on number of lines
        const totalHeight = lineNumber * lineHeight;
        text.selectAll("tspan").attr("dy", function(this: SVGTSpanElement, d, i) {
            return (parseFloat(d3.select(this).attr("dy")) - (totalHeight / 2) + 0.35) + "em";
        });
      });
    }

  }, []);

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision of Mindful and Intelligent Enterprise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We believe in intelligence with purpose. Our framework ensures every AI initiative contributes to a cohesive, trusted, and resilient ecosystem.
          </p>
        </div>
        <div className="w-full h-[600px] bg-gray-50/50 rounded-xl overflow-hidden relative flex items-center justify-center">
          <svg ref={svgRef} className="w-full h-full"></svg>
        </div>
      </div>
    </section>
  );
};

export default VisionCloud;