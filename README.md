## ngFinder

This is a small package to use in combination with my [Gulpfile](https://github.com/DecaUniversity/Gulping/blob/master/Gulpfile.js) to sort and inject Angular files correctly using `gulp-inject`.


## Problem

My Angular files were not being injected in the correct order to avoid errors. 

## Offered solutions by others

There are gulp plugins that sort Angular files in the proper order by reading their content. I used one of them; however it came with a downside. Whenever a Javascript file is changed in my project, through a watcher, a new injection of JS files is triggered. When no Javascript file was being added or deleted, my index.html file (where the JS files were being injected) kept changing and needed to be staged into git. Why? The order of the files within a category, for example components, kept changing after the new injection. This re-ordering within category did not have any negative effect on running the application or generating errors since their dependencies were above them, but it did create the need to commit a petty change to the repository. 

## My offered solution

I believe that commits to a repository need to be fundamental. Having to consistently commit "Change order of JS files" or committing the file in a bundle of other files with no related changes to it is a bad practice and creates improper repo documentation. Therefore, I created this module that sorts Angular files in logical order and will not generate a new version of index.html upon injection of only changed files when used properly in the Gulp workflow.

To make it easier to use with Gulp, ngsource is the package that creates the interface to interact with ngfinder.
