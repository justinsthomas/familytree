jQuery Family Tree

==================

Have you ever thought chaining parent() upon parent() was just a bit confusing or verbose? At your service is a service is a set of simple jQuery functions that map the element selection process to something a bit more familiar: a family tree.

It's as simple as including jquery.familytree.js and calling a function within your script as follows:

var myGrandparent = $('myElement').grandparent();

This all started out of my need of repeatedly using .parent().parent() in a client project, and more functionality will be added as needed. Who wouldn't want to be able to use something like $('.myElement').redHeadedStepchild(), just because?
