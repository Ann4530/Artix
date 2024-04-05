import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import "../../css/ArtConfirm.css"
import { VnpayPayment } from '../../API/ArtShop/ArtShopServices';
import { useNavigate } from 'react-router-dom';

export default function PackagePaymentConfirm(props) {
    let {
        open,
        item,
        handleClose
    } = props;
    const auth = JSON.parse(sessionStorage.getItem("auth"));
    const [dataItem, setDataItem] = React.useState({});
    const navigate = useNavigate()  
    const convertData = (value) => {
        return {
            orderDetailID: 0,
            orderID: 0,
            artWorkID: value?.artworkID,
            dateOfPurchase: new Date(),
            price: value?.price * 1000,
            order: {
                orderID: 0,
                sellerID: value?.creatorID,
                confirmation: true,
                buyerID: auth?.creatorID
            },
            purchaseConfirmationImag: "string",
            emai: "string"
        }
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            // const data = convertData(dataItem);
            // console.log(data)
            const data = await VnpayPayment(convertData(dataItem));
            window.location.href = data?.data;
        } catch (error) {
        }
    }
    React.useEffect(() => {
        setDataItem(item)
    }, [])
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className='dialog-custom'
            style={{
                borderRadius: 50,
                background: "none"
            }}
        >
            <section className="add-card page">
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="name" className="label">
                        <span className="title">Image name</span>
                        <input
                            className="input-field"
                            type="text"
                            name="imagename"
                            value={item?.artworkName}
                            title="Image name"
                            placeholder=""
                        />
                    </label>
                    <label htmlFor="serialCardNumber" className="label">
                        <span className="title">Price</span>
                        <input
                            id="serialCardNumber"
                            className="input-field"
                            value={item?.price * 1000 + " VND"}
                            name="price"
                            title="Input title"
                            placeholder=""
                        />
                    </label>
                    <button className="checkout-btn" type='submit'>Checkout</button>
                </form>
            </section>
        </Dialog>
    );
}
