let fs = require('fs')

/*
*
* 
*/
class feedback {

  constructor() {
    // We need to read it synchronously so we can call other methods directly
    this.feedbacks = JSON.parse(
      fs.readFileSync(__dirname + '/feedbacks.json', 'utf8'))
  }

  // Gives all feedbacks 
  all() {
    //Deep copy
    return JSON.parse(JSON.stringify(this.feedbacks))
  }

  /**
   * Gives the matching ids
   * 
   * @param {String Array} ids 
   */
  get(ids) {
    //Deep copy
    let copy = JSON.parse(JSON.stringify(this.feedbacks))
    for (let [id, feedback] of Object.entries(copy)) {
      if (!ids.map(String).includes(id)) {
        delete copy[id]
      }
    }
    return copy
  }

  /**
   * Save a new feedback 
   * 
   * @param {Object} feedback 
   % @return {boolean} true if correctly inaddserted, false otherwise
   */
  save(feedback) {
    /* Checking feedback integrity
    {
      "comment" : String,
      "reaction" : String 
      "diagram" : String 
    } 
    */
    console.log(feedback.comment)
    try {
      if (typeof (feedback.comment) !== 'string') {
        throw 'Error : Check the feedback content !'
      }
      if (typeof (feedback.reaction) !== 'string') {
        throw 'Error : Check the feedback content !'
      }
      if (typeof (feedback.diagram) !== 'string') {
        throw 'Error : Check the feedback content !'
      }
    } catch (err) {
      console.error(err)
      return false
    }

    // Assuring there is no other property
    let newFeedback = {}
    newFeedback.comment = feedback.comment
    newFeedback.reaction = feedback.reaction
    newFeedback.diagram = feedback.diagram
    newFeedback.date = Date.now()

    // Saving the new feedback to the file
    this.feedbacks[this.getNewId()] = newFeedback
    try {
      fs.writeFile(__dirname + '/feedbacks.json',
        JSON.stringify(this.feedbacks),
        (error) => {
          if (error) {
            throw ('Did not NOT save the new feedback')
          } else {
            console.log('Saved the feedback successfully')
          }
        })
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }

  /**
   * @return {Array} [total of feedbacks, id of all feedbacks]
   */
  getMetadata() {
    let total = 0
    let ids = []
    for (let [id, feedback] of Object.entries(this.feedbacks)) {
      ids.push(id)
      total += 1
    }
    return [total, ids]
  }

  // Gives the largest id
  getLargestId() {
    let largestId = -1
    for (let [id, feedback] of Object.entries(this.feedbacks)) {
      largestId = parseInt(id) > largestId ? parseInt(id) : largestId
    }
    return largestId
  }

  // Gives an unused id
  getNewId() {
    return this.getLargestId() + 1
  }
}

//CommonJS
module.exports = feedback