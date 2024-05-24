var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  jaorduz.github.io   copyright  "
},
{
  "id": "section-title",
  "level": "1",
  "url": "section-title.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section title",
  "body": " Section title  This an examples to leave objectives     How is the average velocity of a moving object connected to the values of its position function?    How do we interpret the average velocity of an object geometrically on the graph of its position function?    How is the notion of instantaneous velocity connected to average velocity?     "
},
{
  "id": "ngj",
  "level": "2",
  "url": "section-title.html#ngj",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "   How is the average velocity of a moving object connected to the values of its position function?    How do we interpret the average velocity of an object geometrically on the graph of its position function?    How is the notion of instantaneous velocity connected to average velocity?    "
},
{
  "id": "section-title2",
  "level": "1",
  "url": "section-title2.html",
  "type": "Section",
  "number": "2.1",
  "title": "This is a section of the second chapter",
  "body": " This is a section of the second chapter  This section is about distributions   "
},
{
  "id": "section-title3a",
  "level": "1",
  "url": "section-title3a.html",
  "type": "Section",
  "number": "3.1",
  "title": "This is a section of the third chapter",
  "body": " This is a section of the third chapter  This section is about probability   "
},
{
  "id": "section-title3b",
  "level": "1",
  "url": "section-title3b.html",
  "type": "Section",
  "number": "3.2",
  "title": "This is  section of the third chapter",
  "body": " This is section of the third chapter  This section is about probability part two and three   "
},
{
  "id": "section-title4a",
  "level": "1",
  "url": "section-title4a.html",
  "type": "Section",
  "number": "4.1",
  "title": "This is a section of the test chapter",
  "body": " This is a section of the test chapter  This is a test!    newsection         "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .   Here is the ref. . Use it!  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
