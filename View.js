var PenguinView = function PenguinView(element){
    this.element = element;
    this.onClickGetPenguin = 0
}

PenguinView.prototype.render = function render(viewModel){
    this.element.innerHTML = `
        <h3>${viewModel.name}</h3>
        <img class="penguin-image" src="${viewModel.imageURL}" alt = "${viewModel.name}" />
        <p><b>Size: </b>${viewModel.size}</p>
        <p><b>Favorite food: </b>${viewModel.favoriteFood}</p>
        <a id="previousPenguin" class = "previous button" href="javascript:void(0) data-penguin-index="${viewModel.previousIndex}">Previous</a>
        <a id="nextPenguin" class = "next button" href="javascript:void(0) data-penguin-index="${viewModel.nextIndex}">Next</a>

    `
    this.previousIndex = viewModel.previousIndex;
    this.nextIndex=viewModel.nextIndex;
    var previousPenguin = this.element.querySelector("#previousPenguin")
    previousPenguin.addEventListener("click", this.onClickGetPenguin);
    var nextPenguin = this.element.querySelector("#nextPenguin");
    nextPenguin.addEventListener('click', this.onClickGetPenguin);
    nextPenguin.focus()
}