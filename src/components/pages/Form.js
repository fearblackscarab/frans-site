import React from "react";

const Form = (props) => {
    const [formData, setFormData] = React.useState(
        {
            jewelry_name: "",
            jewelry_img: "",
            jewelry_desc: "",
            jewelry_type: 1,
            jewelry_price: 0,
            jewelry_quantity: 1
        }
    )

    const submitForm=(e)=>{
        e.preventDefault()
        fetch('http://localhost:3001/api/jewelry/create',{
            method:'post',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded'
              },
            body: JSON.stringify(formData)
        }).then((response)=> {
            return response.json()
        }).then((body)=> {
            console.log(body);
        });
    }

    const handleChange = (event) => {
        console.log(event)
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    console.log(formData)
    return (
        <main className="form-page container text-center">
            <h2 className="form-title">Product Submission</h2>
            <form className="form" onSubmit={submitForm}>
                <div className="form_div">
                    <div className="jewelry_name_div form-item">
                        <p className="jewelry-name">Name of piece</p>
                        <input type="text" name="jewelry_name" onChange={handleChange} value={formData.jewelry_name} placeholder='name' />
                    </div>
                    <div className="jewelry_img_div form-item">
                        <p className="jewelry-img">Jewelry img name</p>
                        <input type="text" name="jewelry_img" onChange={handleChange} value={formData.jewelry_img} placeholder='image name' />
                    </div>
                    <div className="jewelry_disc_div form-item">
                        <p className="jewelry-desc">Description of piece</p>
                        <input type="text" name="jewelry_desc" onChange={handleChange} value={formData.jewelry_desc} placeholder='description' />
                    </div>
                    <div className="jewelry_type_div form-item">
                        <p className="jewelry-type">Type</p>
                        <select name="jewelry_type" onChange={handleChange} value={formData.jewelry_type} placeholder='type'>
                            <option value='1'>Bracelet</option>
                            <option value='2'>Necklaces</option>
                            <option value='3'>Earrings</option>
                        </select>
                    </div>
                    <div className="jewelry_price_div form-item">
                        <p className="jewelry-price">Price</p>
                        <input type="number" name="jewelry_price" onChange={handleChange} value={formData.jewelry_price} placeholder='price' />
                    </div>
                    <div className="jewelry_quantity_div form-item">
                        <p className="quantity d-inline">Quantity</p>
                        <select name="jewelry_quantity" onChange={handleChange} value={formData.jewelry_quantity} placeholder='quantity'>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                            <option value='11'>11</option>
                        </select>
                    </div>
                    <div className="submit-button-div">
                        <button className="btn submit-button">Submit</button>
                    </div>
                </div>
            </form>
        </main>
    )
};

export default Form;