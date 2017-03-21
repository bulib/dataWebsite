---
title: Adding Metadata
permalink: /manage/metadata/
css: green-plaid
category:
 - manage
 - guide
excerpt: Find out what metadata are and how to use them.

---
## What are Metadata?

Metadata are data about data and are everywhere (we just don't always notice them). Examples of metadata that you might be more familiar with are:

+ a book's author
+ a journal's publisher
+ an article's publication date

Each one of these pieces of metadata provide more information about the item you're looking at. When metadata is standardized and brought together they become powerful tools for locating and discovering things - like a library catalog or an internet search engine. 

## Why add Metadata? 

Adding metadata to data sets are particularly important because data sets exist within a certain context and this context must be communicated for others to reuse the data set. 

Metadata explains a data set to others. For example, the [City of Boston has open data on 311 Service requests](https://data.cityofboston.gov/City-Services/311-Service-Requests/awu8-dc52). If a researcher didn't know the data was about Boston, what a 311 request is, or the year for the data represents it would be very difficult to reuse the data. Further, without the [data dictionary](https://data.cityofboston.gov/api/views/awu8-dc52/files/Tp1cmB2MaNT6XhJIyCq15wiGCDv42X10-69O-axsB6g?download=true&filename=Data_Dictionary-CRMVariables.pdf) it would be hard to understand what some variables are, what blank values mean, or what values are possible. 

This is why metadata is important. It provides the necessary information for others - sometimes your future self - to understand a data set and how to properly reuse it. 

## General Guidelines 

There are a few general guidelines for adding metadata to a data set: ensuring your data is citable and providing documentation. 

### Make Your Data Citable

To help others find your data and to reuse it appropriately, we'll need to provide enough details to ensure your data is citable. To allow others to cite your data you'll need to provide:

+ Creator(s) of the data
+ Title of the data set
+ Year the data set was published or submitted to a repository
+ Version or edition of the data set
+ URL or DOI of the data

For more information about how to [cite data read our guide](https://bulib.github.io/dataWebsite/manage/citing-data/). 

### Provide Documentation

Sharing documentation about your data set is the best way to help others reuse it. Additionally, developing the documentation will also help you articulate some of the subtleties living within your data.

A common method for documenting your data is writing a data dictionary. A data dictionary is great for explaining variable names, potential values, and format. Data dictionaries don't have to be complicated to be useful - a spreadsheet or text file will do the trick. 

An example [data dictionary entry](https://data.cityofboston.gov/api/views/awu8-dc52/files/Tp1cmB2MaNT6XhJIyCq15wiGCDv42X10-69O-axsB6g?download=true&filename=Data_Dictionary-CRMVariables.pdf) from the [311 Service calls](https://data.cityofboston.gov/City-Services/311-Service-Requests/awu8-dc52) in Boston looks like:

| Vairable Name  | Label | Type | Value Codes | Missing Code|
| ------------  | ----- | ---- | ----------- | -----------|	
| OPEN_DT 	| Case open date | Date (mm/dd/yyyy <br/> hh:mm:ss AM/PM) | NA | (BLANK) | 

This table quickly conveys a lot of useful information. The variable name (OPEN_DT), as represented in the data set, is more fully explained (case open date) as well as the type of data we'd expect to find in it (date-time data). Without this we'd have to contact the creator of the data set to ask "what does OPEN_DT stand for?" A potentially time consuming process for everyone involved. 

Other information to include with your data set might be: 

+ Geographic location
+ Instruments used (and their settings)
+ Data collection methodology
+ Protocols for cleaning data 

Finally, it is always valuable to provide a short story about your data that briefly explains the who, what, when, where, and why about your data set. Also, if the data set was the foundation of any published works be sure to mention that and provide a link if possible. 

Without the proper documentation your data is unlikely to be reused by others. 

## Things to Avoid

Here are a few things to try to avoid when providing metadata about your data set. 

+ Being inconsistent with creators names
+ Cryptic variable names 
+ Misleading or dated documentation 
+ Saving documentation in propriatary formats that others might not have access to.
+ Inaccurate contact information 

## Additional Resources

There are too many metadata standards and best practices for all the various disciplines for us to list in one place. Below are a list of places and resources you can visit to find more information. You can also [contact us](mailto:data@bu.edu) if you have any questions or issues. 

### Discplinary Metadata Guide

A list of some additional guides we know about:

+ Digital Curation Centre's [Disciplinary Metadata](http://www.dcc.ac.uk/resources/metadata-standards)
+ Research Data Alliance [Metadata Directory](http://rd-alliance.github.io/metadata-directory/standards/)
+ ICPSR [Best Practices in Creating Metadata](http://www.icpsr.umich.edu/icpsrweb/content/deposit/guide/chapter3docs.html)
+ DataONE [Metadata Best Practices](https://www.dataone.org/best-practices/metadata)

### Metadata Standards

An incomplete list of existing metadata standards: 

+ <a href="http://www.virtualastronomy.org/AVM_DRAFTVersion1.1_rlh27.pdf">Astronomy Visualization Metadata Standard</a> 
+ <a href="http://www.fgdc.gov/standards/projects/FGDC-standards-projects/metadata/base-metadata/v2_0698.pdf">Content Standard for Digital Geospatial Metadata</a> 
+ <a href="http://rs.tdwg.org/dwc/">Darwin Core</a> 
+ <a href="http://dublincore.org/documents/dces/">Dublin Core</a> 
+ <a href="http://knb.ecoinformatics.org/software/eml/">Ecological Metadata Language</a> 
+ <a href="http://www.ddialliance.org/">Data Documentation Initiative (DDI)</a> 
+ <a href="http://en.wikipedia.org/wiki/Data_dictionary">Swingle Plant Anatomy Collection data dictionary</a> 
+ <a href="http://www.altova.com/resources_schemalib.html">Altova Schema library</a> 
+ <a href="http://www.dlib.indiana.edu/~jenlrile/metadatamap/">Seeing Standards: A Visualization of the Metadata Universe</a> (humanities: information on over a hundred cultural heritage metadata standards) 
+ <a href="http://tei-c.org/">Text Encoding Initiative</a>
+ [DataCite Metadata Schema](https://schema.datacite.org/) 
+ [Minimum Information for Biological and Biomedical Invesitations](https://biosharing.org/collection/MIBBI) 