---
title: Designing a Naming Convention
permalink: /manage/naming-convention/
css: gold-triangles
category: 
- manage
- guide
excerpt: Discover how to design a simple and effective naming convention for your project.
---

## What is a File Naming Convention?

Researchers often use structured guidelines known as file naming conventions to describe the content and date of the file. These conventions help you track different versions of a file and determine which is the most current.

## Why Use a File Naming Conventions? 

A file naming convention will: 
+ Help you organize, track, and find the data you have collected.
+ Prevent confusion among other researchers who may also be creating and modifying files.
+ Make it easier for other researchers to find and interpret your data.

In short, using a file naming convention will save you time by keeping your work organized and understandable. Consistently organizing your files in a logical way will also make it easier to analyze and process your files, and the data they contain, with scripts and other tools. This ability to automate your workflows will not only cut down time but also make it easier to reproduce your research and rerun analysis in a timely fashion. 

## General Guidelines

As you and your research partners establish file naming conventions, we recommend you consider these guidelines:

+ Define file conventions at the start of your project and follow them consistently during the course of your research.
+ Include a text file, often called a readme, in your file directory that describes the naming conventions you are using. This information will be helpful for individuals who are new to the project.
+ Use descriptive file names that are meaningful to you and your colleagues. This might include the project name, subject, or acronym.
+ Keep file names relatively short.
+ Include dates in your filename, which can help with sorting different versions of your file. Recommended format: yyyymmdd.
+ Use a sequential numbering system to keep track of different versions or revisions to a file. For example, try with leading 0’s. (rehab01 instead of rehab1)
+ Use hyphens, underscores, or [camelCase](https://en.wikipedia.org/wiki/Camel_case) instead of spaces.

## Things to Avoid

+ Spaces within your files; not all software recognizes spaces within file names.
+ Special characters in your file names such as: "/ \ : * ? " < > [ ] & $. These characters have specific meanings for various  operating systems and could result in your files being deleted or misplaced.
+ Long or wordy names that may not have meaning to you and other researchers on your team.

## Examples 

### A Daily Journal 

A researcher often keeps a daily electronic journal. In her research project folder she has a folder titled “journal.” Inside this folder are text files named with a simple date format - YYYYMMDD. 

	project-folder 
		journal 
			20170101.txt
			20170102.txt
			20170102.txt
		other-sub-folder 

### Meeting Minutes

A lab has weekly meetings to discuss their work, issues, and upcoming events. Each week a different lab member takes the meeting minutes to help distribute the workload. A file naming convention for this group might be: 

	project_folder 
		minutes
			20170206-project-weekly-minutes.docx 
			20170213-project-weekly-minutes.docx
			20170220-project-weekly-minutes.docx 

### Biomedical Samples

A biomedical engineering lab is taking numerous samples from a heart and staining them to learn more about the tissue samples. The lab would like the samples to link the experiment and lab notebook in a systematic method so the entire lab understands which samples connect to which experiment. 

The team develops a method that formats their naming convention using the experiment number, A or B, section number, and stain used. An example of this naming convention would look like **0231A_216_act** where **0231** is the experiment number, **A** stands for apex, **216** is the section number, and **act** is the stain (actinin). A folder of these slides might be organized like: 

	0231A_216
	0231A_216_act 
	0231B_100
	0232A_215
	0232B_215_act

In this way, the researchers can programmatically sort a large number of files by experiment number, section, or stain. While this naming convention is more complex than our other examples it fits the needs of a particular lab.

This example is provided by University of Massachusetts Medical School’s Lamar Soutter Library in the [New England Collaborative Data Management Curriculum](http://library.umassmed.edu/necdmc/index) in [Module 1](http://library.umassmed.edu/necdmc/modules).
