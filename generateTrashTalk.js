function randomNum(trash, phrase) {
  let trashTalkIndex = Math.floor(Math.random() * trash.length)
  let phraseIndex = Math.floor(Math.random() * phrase.length)
  return trash[trashTalkIndex] + phrase[phraseIndex]
}


function generateTrashTalk(talks) {
  // define task, phrase and trashTalkBooks
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢'],
    HR: ['幫忙找人', '算薪水', '砍新人的薪水', '改工作規則']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常', '很輕鬆', '沒問題', '家常便飯']


  // create books to store task and phrase for user to pick up
  let occupation = ''

  if (talks.job === 'engineer') {
    occupation = '工程師'
    return `身為一個${occupation}，${randomNum(task.engineer, phrase)}吧!!!`
  } else if (talks.job === 'designer') {
    occupation = '設計師'
    return `身為一個${occupation}，${randomNum(task.designer, phrase)}吧!!!`
  } else if (talks.job === 'entrepreneur') {
    occupation = '創業家'
    return `身為一個${occupation}，${randomNum(task.entrepreneur, phrase)}吧!!!`
  } else if (talks.job === 'HR') {
    occupation = 'HR'
    return `身為一個${occupation}，${randomNum(task.HR, phrase)}吧!!!`
  } else {
    return `Please choose anyone!`
  }


}

// export generateTrashTalk function for other file
module.exports = generateTrashTalk