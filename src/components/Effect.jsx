import {useState, useEffect} from 'react';

const Effect = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsuarios = async () => {
            //Son promesas Estas se usan de manera asyncrona (Leer mas de esto)
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
    
            setUsers(data);
        };

        getUsuarios();
    },[]);
    //console.log(users)

    const handleSubmit = (e) => {

        //Evita que se recargue la pagina cuando el form tien un submit preventDefault()
        e.preventDefault();
    };

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Search</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Effect;
