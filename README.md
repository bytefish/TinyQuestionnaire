# Composable Surveys with Angular 9 #

I have built so many survey and questionnaire applications in my life, that I basically stopped counting.

Most of the systems were built in a way, that you have a schema defining the elements and the forms are 
dynamically rendered based on it. The schema defined the question types (single choice, multiple choice, 
text fields, ...), valid values and maybe some conditional displaying of elements.

What sounds appealing first... often breaks in reality.

## What's the problem? ##

No one wants to use boring surveys, people want:

* A great layout system
* Auto-Completes
* Accessibility
* Internationalization (i18n)
* Custom Validators
* Custom CSS
* Easy Backend Integration
* Push Messages 
* ... basically everything

And no matter how hard you try to satisfy everyones requirements, the abstraction you come 
up with will break. The only thing you could do for questionnaires and surveys is defining 
a good way to reuse components.

## Where to find more ##

The article for this Github repository can be found at:

* [https://bytefish.de/blog/composable_surveys_angular_9/](https://bytefish.de/blog/composable_surveys_angular_9/)

## Example ##

The example application can be found at:

* [https://bytefish.de/static/apps/tiny-questionnaire/](https://bytefish.de/static/apps/tiny-questionnaire/)

## License ##

The code is released under terms of the [MIT License].

[MIT License]: https://opensource.org/licenses/MIT