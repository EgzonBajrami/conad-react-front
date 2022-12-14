import {Form,Button} from 'react-bootstrap';
import {useState} from 'react';
import {api,endpoints} from '../../Lib/Api'
import './Comments.css'
const Comments = () =>{
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [number,setNumber] = useState();
    const [email,setEmail] = useState();
    const [comment,setComment] = useState('');
    const [resu,setResu] = useState(true);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const data = [name,surname,number,email,comment];
        const config = {
            data
        }
        const result = await api.call(endpoints.createComment,config);
        console.log(result);
        if(result.success){
            setResu(false);
        }

    }
    return <>
    <div className="form-move">

    {resu ?(<>
        <Form onSubmit={handleSubmit} >
        <div className="put-twoLine">
        <Form.Group className="mb-3">
                <Form.Label>
                    Emri:
                </Form.Label>
                <input 
                type="text"
                required
                className="form-control"
                value={name}
                onChange={(e)=>{
                    setName(e.target.value)
                }}
                placeholder="Emri juaj:"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                    Mbiemri:
                </Form.Label>
                <input 
                type="text"
                required
                className="form-control"
                value={surname}
                onChange={(e)=>{
                    setSurname(e.target.value)
                }}
                placeholder="Mbiemri juaj:"
                />
            </Form.Group>
        </div>
        <div className="put-twoLine">
        <Form.Group className="mb-3">
                <Form.Label>
                    Numri i telefonit:
                </Form.Label>
                <input 
                type="number"
                required
                className="form-control"
                value={number}
                onChange={(e)=>{
                    setNumber(e.target.value)
                }}
                placeholder="Numri i telefonit tuaj:"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>
                    Email juaj:
                </Form.Label>
                <input 
                type="email"
                required
                className="form-control"
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                placeholder="Email juaj:"
                />
            </Form.Group>
        </div>
        <div className="comment-here">

      
        <Form.Group className="mb-3">
            <Form.Label>
                Komenti juaj:
            </Form.Label>
        <textarea 
                type="text"
                required
                className="form-control"
                rows="5"
                value={comment}
                onChange={(e)=>{
                    setComment(e.target.value)
                }}
                placeholder="Shkruajë një koment ose kritikë:"
                />
        </Form.Group>
        </div>
        <div className="put-center-btns">

   
        <Button type="submit">Dërgo</Button>
        </div>

    </Form>
    </>):(<>
    <p>Komenti juaj u krijua me sukses.</p>
    </>)}

    </div>
    </>
}
export default Comments;