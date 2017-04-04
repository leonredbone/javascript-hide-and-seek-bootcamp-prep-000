function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(target, nested) {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lisRank = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lisRank.length; i++) {
    lisRank[i].innerHTML = (parseInt(lisRank[i].innerHTML) + n)
  }
}

function deepestChild()   {
  var parentNode = document.getElementById('grand-node')
  var childNode = parentNode.children[0]
  while ((childNode) != null) {
    parentNode = childNode
    childNode = parentNode.children[0]
  }
  return parentNode
}
