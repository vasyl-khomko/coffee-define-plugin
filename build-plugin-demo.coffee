if Meteor.isClient 
  #define vasyl console.log "vasyl" 
  #define COUNT_fgfgdf 5657657 
  #define blabla console.log "blabla" 
  #define COUNT_VALUE 12 
  # vasyl vasyl A bvasyl _vasyl 1vasyl
  Session.setDefault 'counter', 0
  Template.hello.helpers 
    counter: ->
      vasyl
      blabla
      vasyl
      Session.get('counter')
  Template.hello.events 
    'click button': ->
      # increment the counter when button is clicked
      Session.set 'counter', Session.get('counter')  + COUNT_VALUE
vasyl