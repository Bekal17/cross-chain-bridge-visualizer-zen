import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'

export default function GraphCanvas({ graph, onSelect }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!graph) return
    const width = 900, height = 500
    const svg = d3.select(ref.current)
    svg.selectAll('*').remove()

    const linkForce = d3.forceLink(graph.links)
      .id(d => d.id)
      .distance(200)
      .strength(1)

    const simulation = d3.forceSimulation(graph.nodes)
      .force('link', linkForce)
      .force('charge', d3.forceManyBody().strength(-800))
      .force('center', d3.forceCenter(width / 2, height / 2))

    const link = svg.append('g')
      .selectAll('line')
      .data(graph.links)
      .enter()
      .append('line')
      .attr('stroke', '#94a3b8')
      .attr('stroke-width', d => Math.max(1, Math.log10(d.volumeUSD || 1)))

    const node = svg.append('g')
      .selectAll('g')
      .data(graph.nodes)
      .enter()
      .append('g')
      .attr('cursor', 'pointer')

    node.append('circle')
      .attr('r', 20)
      .attr('fill', '#60A5FA')

    node.append('text')
      .attr('y', 4)
      .attr('text-anchor', 'middle')
      .text(d => d.label)
      .attr('fill', 'white')
      .attr('font-size', '10px')

    node.on('click', (event, d) => {
      if (onSelect) onSelect(d)
    })

    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y)
      node.attr('transform', d => `translate(${d.x},${d.y})`)
    })

    return () => simulation.stop()
  }, [graph, onSelect])

  return <svg ref={ref} width="100%" height={500}></svg>
}
