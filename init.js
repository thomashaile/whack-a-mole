window.onload = () => {
    debugger;
    // render initial state

    const root = document.getElementById('root');

    const board = new Board(Mole, 5, 5);
    root.appendChild(board.render());

}