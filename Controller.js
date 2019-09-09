"esversion: 6"
// var PenguinController = function PenguinController(penguinView, penguinModel) {
//     this.penguinView = penguinView;
//     this.penguinModel = penguinModel;
// }

// PenguinController.prototype.initialize = function initialize() {
//     this.penguinView.onClickGetPenguin = this.onClickGetPenguin.bind(this)
// }
// PenguinController.prototype.onClickGetPenguin = function onClickGetPenguin(e) {
//     var target = e.currentTarget;
//     var index = parseInt(target.dataset.penguinIndex, 10)
//     this.penguinModel.getPenguin(index, this.showPenguin.bind(this))
// }
// PenguinController.prototype.showPenguin = function showPenguin(penguinModelData) {
//     var penguinViewModel = {
//         name: penguinModelData.name,
//         imageUrl: penguinModelData.imageUrl,
//         size: penguinModelData.size,
//         favoriteFood: penguinModelData.favoriteFood
//     }
//     penguinViewModel.previousIndex = penguinModelData.index - 1;
//     penguinModelData.nextIndex = penguinModelData.index + 1;

//     if (penguinModelData.index === 0) {
//         penguinViewModel.previousIndex = penguinModelData.count - 1;
//     }
//     if (penguinViewModel.index === penguinModelData.count - 1) {
//         penguinViewModel.nextIndex = 0
//     }

//     this.penguinView.render(penguinViewModel)
// }

export class PenguinController {
    constructor(penguinView, penguinModel) {
        this.penguinView = penguinView;
        this.penguinModel = penguinModel;
    }

    initialize() {
        this.penguinView.onClickGetPenguin = this.onClickGetPenguin
    }
    onClickGetPenguin() {
        const target = e.currentTarget;
        let index = parseInt(target.dataset.penguinIndex, 10)
        this.penguinModel.getPenguin(index, this.showPenguin)
    }
    showPenguin() {
        const penguinViewModel = {
            name: penguinModelData.name,
            imageUrl: penguinModelData.imageUrl,
            size: penguinModelData.size,
            favoriteFood: penguinModelData.favoriteFood
        }
        penguinViewModel.previousIndex = penguinModelData.index - 1;
        penguinModelData.nextIndex = penguinModelData.index + 1;

        if (penguinModelData.index === 0) {
            penguinViewModel.previousIndex = penguinModelData.count - 1;
        }
        if (penguinViewModel.index === penguinModelData.count - 1) {
            penguinViewModel.nextIndex = 0
        }
    }
    this.penguinView.render(penguinViewModel)
}
