d3.json("samples.json").then((importedData) => {
    console.log(importedData);

    var sampleData = importedData;

    // * Use `sample_values` as the values for the bar chart.
    // Sort the data array using the sample_values value
    SampleValues = sampleData.samples.sort(function(a, b) { return parseFloat(b.sample_values) - parseFloat(a.sample_values); });
    SampleValuesSliced = SampleValues.slice(0, 10);
    SampleValuesData = SampleValuesSliced.reverse();
    console.log(SampleValuesData);

    var trace1 = {
        x: SampleValuesData.map(row => row.sample_values),
        y: SampleValuesData.map(row => row.otu_ids),
        text: SampleValuesData.map(row => row.otu_labels),
        name: "Top 10",
        type: "bar",
        orientation: "h"
    };

    var chartData = [trace1];

    var layout = {
        title: "Top 10",
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
        }
    };

    Plotly.newPlot("bar", chartData, layout);

    // * Create a bubble chart that displays each sample
    var trace2 = {
        x: sampleData.otu_ids,
        y: sampleData.sample_values,
        mode: 'markers',
        marker: {
            color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
            opacity: sampleData.otu_ids,
            size: sampleData.sample_values
        }
    };

    var data = [trace2];

    var layout = {
        title: 'Marker Size and Color',
        showlegend: false,
        height: 600,
        width: 600
    };

    Plotly.newPlot('bubble', data, layout);
});

/* clear the input value
d3.select("#input").node().value = "";






* Use `otu_ids` as the labels for the bar chart.

* Use `otu_labels` as the hovertext for the chart.

3. Create a bubble chart that displays each sample.

* Use `otu_ids` for the x values.

* Use `sample_values` for the y values.

* Use `sample_values` for the marker size.

* Use `otu_ids` for the marker colors.

* Use `otu_labels` for the text values.

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

6. Update all of the plots any time that a new sample is selected */