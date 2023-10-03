export function Review(id, author, date, comment, rating){
    this.id = id;
    this.author = author;
    this.date = date;
    this.comment = comment;
    this.rating = rating;

    // Getters and setters

    this.setId = function(newId){
        this.id = newId
    }

    this.getId = function(){
        return this.id
    }

    this.setAuthor = function(newAuthor){
        this.author = newAuthor
    }

    this.getAuthor = function(){
        return this.author
    }

    this.setDate = function(newDate){
        this.date = newDate
    }

    this.getDate = function(){
        return this.date
    }

    this.setComment = function(newComment){
        this.comment = newComment
    }

    this.getComment = function(){
        return this.comment
    }

    this.setRating = function(newRating){
        this.rating = newRating
    }

    this.getRating = function(){
        return this.rating
    }
} 