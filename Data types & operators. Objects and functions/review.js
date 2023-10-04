export function Review(id, author, date, comment, rating){
    this._id = id;
    this._author = author;
    this._date = date;
    this._comment = comment;
    this._rating = rating;

    // Getters and setters

    this.setId = function(newId){
        this.id = newId
    }

    this.getId = function(){
        return this._id
    }

    this.setAuthor = function(newAuthor){
        this.author = newAuthor
    }

    this.getAuthor = function(){
        return this._author
    }

    this.setDate = function(newDate){
        this.date = newDate
    }

    this.getDate = function(){
        return this._date
    }

    this.setComment = function(newComment){
        this.comment = newComment
    }

    this.getComment = function(){
        return this._comment
    }

    this.setRating = function(newRating){
        this.rating = newRating
    }

    this.getRating = function(){
        return this._rating
    }
} 