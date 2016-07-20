var tester;
$( document ).ready(function (){
	console.log("here we go!!");

	//canvas size 
	var width = $(".intro").width(),
    	height = 480,
    	radius = 6;
	//create nodes 
	var nodes = new Array; 
	for (var i = 0; i < 14; i++) { 
		var add = { "index": i };
		nodes.push(add) 
	};	

	var links = new Array; 
	for (var i = 0; i < nodes.length; i++) {
		if( i == nodes.length-1){
			var add = {"source": i, "target": 1};
		} else {
			var add = { "source": i, "target": i+1 };
		}
		links.push(add);
		var again = {"source": 0, "target": i };
		links.push(again);
	};

	//add svg to dom 
	var svg = d3.select(".intro").append("svg")
    	.attr("width", width)
    	.attr("height", height);

	var force = d3.layout.force()
        .size([width-15, height-15]) //size
        .gravity(0.4) //gravity
        .charge(-1000) //charge between elements
        .linkStrength(0.5) // link strength, rigidity 
        .nodes(nodes) // adds nodes
        .links(links); // adds links 

     tester = force; 

    //enable dragging of nodes
    var drag = force.drag()
		.on("dragstart", dragstart);	
 
    var link = svg.selectAll('.link')
		.data(links)
		.enter().append('line')
		.attr('class', 'link')
		.attr('stroke', 'black');

    var node = svg.selectAll('.node')
			.data(nodes)
			.enter().append('circle')
			.attr('class','node')
			.style('fill',"yellow")
			.style('stroke',"yellow")
			.attr('r',10)
			.attr('class', "node")
			.attr('id', function(d, i){ return i })
			.attr('cx', function(nodes, i){ return i })
			.attr('cy',function(nodes, i){ return i })
            .on("mouseover", mouseover)
            .on("mouseout", mouseout)
			.call(drag);

    //set the link distance 
    force.linkDistance(10);
    
	//turn force on and sent function for each tick		
	force.on('tick', function(){
		//update node location
	  	node.attr('cx', function(d) { return d.x = Math.max(radius, Math.min(width - radius, d.x)); })
	        .attr('cy', function(d) { return d.y = Math.max(radius, Math.min(height - radius, d.y)); });
	    //update link location
	    link.attr('x1', function(d) { return d.source.x; })
	        .attr('y1', function(d) { return d.source.y; })
	        .attr('x2', function(d) { return d.target.x; })
	        .attr('y2', function(d) { return d.target.y; });
	});
    //force functions 
    function dragstart(d) {
      d3.select(this).classed("fixed", d.fixed = true);
    }

    function mouseover(d) {
        console.log("mouseover"); 
        d3.select(this).style("fill", "blue")
                        .style("stroke", "blue");
    }

    function mouseout(d){
        console.log("mouseout"); 
        d3.select(this).style("fill","yellow")
                .style("stroke","yellow");
    }

	force.start(); 
});//end document 