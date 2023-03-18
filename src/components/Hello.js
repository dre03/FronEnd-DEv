const Hello = (props) =>{
            const {nama, jurusan} = props;
            return (
                <div className="grid-container">
                    <div className="card">
                        <div className="container">
                            <h4><b>Nama saya {nama}</b></h4> 
                            <p>Saya jurusan {jurusan}</p> 
                        </div>
                    </div>
                </div>
            );
        }
export default Hello;