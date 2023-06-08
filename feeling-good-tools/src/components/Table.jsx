function Table() {
    function open({ target }) {
        target.classList.add('open')
    }

    return (<>
        <table>
            <tbody>
                <tr>
                    <td><div className="open" onClick={open}>hi</div></td>
                    <td><div className="box open" onClick={open}>hi</div></td>
                    <td><div className="box open" onClick={open}>hi</div></td>
                </tr>
                <tr>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                </tr>
            </tbody>
        </table>
    </>);
}

export default Table;