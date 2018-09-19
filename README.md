# dataWebsite

This repository hosts our data services website. The development build is at https://bulib.github.io/dataWebsite/

## Contribute

Help us! To contribute checkout [contribute.md](contribute.md).  

## Documentation

Background/hosting documentation is stored in this [Data Services Website Transition pdf](https://bushare.sharepoint.com/sites/libraries/data/Shared%20Documents/Transistion%20Documents/20180102-Data-Website.pdf).

It contains the information regarding:
- production and development environments
- background on the technology used
- code and site structure
- post tags and key tasks
- additional links

Additional documentation describing how to add on to the site will be made available
  in the [wiki](https://github.com/bulib/dataWebsite/wiki) of this repository.
  It should (eventually) cover:
+ starting a new page
+ how to use categories and tags
+ understanding the website's workflow
+ calendar/feed updates

## Usage

### Initial Set-Up
The following commands (to be run in the terminal/command window) should be run
  once and will provide you with a runnable local version of the code with its
  dependencies.

```
$ git clone https://github.com/bulib/dataWebsite.git  # pull down a copy of the code
$ cd dataWebsite  # switch into the directory containing the site
$ gem install bundler  # install the Bundler gem
$ bundle install  # install dependencies for running jekyll
```

### Running locally

Once you're set up, serve the site locally at [localhost:4000](http://localhost:4000)
  with the following:
```
$ bundle exec jekyll serve
```

## Deployment


### Configuring the Script

Noting that work should ideally be done in a separate branch (not `master`), when
  you're satisfied with the changes and how they appear locally, the
  `./_site/telegraph/dw-rebuild.sh` script should help you deploy it to TEST
  and/or PRODUCTION.

Please make sure to update/double-check that the following variables are set correctly
  in the above `dw-rebuild.sh` script:

|variable|description|
|:-------|:----------|
|`user`|BU username|
|`local_path`|directory where your local version is located|
|`local_build`|the folder within the project containing the output version|
|`server`|the IS&T server hosting the dev and prod sites|
|`dev_path`|path within that server where http://www-test.bu.edu/dev/data/ is hosted|
|`production_path`|path within that server where http://www.bu.edu/dev/data/ is hosted|


### Running the Script

To deploy, first ensure that
- the script is executable (`$ chmod +x _site/telegraph/dw-rebuild.sh`)
- you don't have any local uncommitted changes (you can use `git stash` then
  `git stash pop` if needed)

Then run it like so:
```
$ _site/telegraph/dw-rebuild.sh -d  # deploy to TEST
$ _site/telegraph/dw-rebuild.sh -p  # deploy to PROD
```

Note: the script will change git branches on you, and the `gh-pages` branch
  doesn't have anything in the `telegraph` folder. To change branches back to
  yours use the following:
```
$ git checkout branch_name
```
