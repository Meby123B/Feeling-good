function Table() {
    function open({ target }) {
        target.firstChild.classList.add('open')
    }

    return (<>
        <table>
            <tbody>
                <tr>
                    <td><div className="box" onClick={open}>hi</div></td>
                    <td><div className="box" onClick={open}>hi</div></td>
                    <td><div className="box" onClick={open}>hi</div></td>
                </tr>
                <tr>
                    <td onClick={open}><div className="box" >hi</div></td>
                    <td onClick={open}><div className="box" >hi</div></td>
                    <td onClick={open}><div className="box" >hi</div></td>
                </tr>

            </tbody>
        </table>
    </>);
}

export default Table;