
module powerbi.extensibility.visual {
     export class Visual implements IVisual {

        private svg: d3.Selection<SVGElement>;

        constructor(options: VisualConstructorOptions) {

            let svg = this.svg = d3.select(options.element)
                 .append('svg').classed('liquidFillGauge', true);

             this.svg.append("circle")
                 .attr("cx", 50)
                 .attr("cy", 50)
                 .attr("r", 50)
                 .style("fill", 'green');
         }

        public update(options: VisualUpdateOptions) {
         }

        public destroy(): void {
         }
     }
 }
