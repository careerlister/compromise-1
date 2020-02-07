const adjectives = '(misty|rusty|dusty|rich|randy)'
let list = [
  // all fell apart
  { match: '[all] #Determiner? #Noun', group: 0, tag: 'Adjective', reason: 'all-noun' },
  // very rusty
  { match: `#Adverb [${adjectives}]`, group: 0, tag: 'Adjective', reason: 'really-rich' },
  // rusty smith
  { match: `${adjectives} #Person`, tag: 'Person', reason: 'randy-smith' },
  // rusty a. smith
  { match: `${adjectives} #Acronym? #ProperNoun`, tag: 'Person', reason: 'rusty-smith' },

  // smoked poutine is
  { match: '[#PastTense] #Singular is', group: 0, tag: 'Adjective', reason: 'smoked-poutine' },
  // baked onions are
  { match: '[#PastTense] #Plural are', group: 0, tag: 'Adjective', reason: 'baked-onions' },

  //a staggering cost
  { match: '(a|an) [#Gerund]', group: 0, tag: 'Adjective', reason: 'a|an' },
]

module.exports = list
