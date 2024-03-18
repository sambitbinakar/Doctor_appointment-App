import axios from "axios"

const BASE_URL="http://192.168.2.222:1337/api"
const API_KEY="e5a86f5234a626e8529c6841405cda35875aa91ba96b71356b8073d9f3c3d6854efdecf69f45440e72885b3e8218d50d34f4dab144a115dfc443cfe30fc832d91d4246c5b2dd174b7e655a01fb6f75338b02fc241e428d34cc0c08041261d962e68f655e5ad6bc5d525592b96b496c9a5d813ef65244ed7cc1915177f146f620"

const AxiosInstance=axios.create({
    baseURL:BASE_URL,
    headers:{
        'Authorization':"Bearer "+API_KEY
    }
})

const getSlider=()=>AxiosInstance.get("/sliders?populate=*");
const getCatagories=()=>AxiosInstance.get("/doc-catagories?populate=*");
const getpremiumhospital=()=>AxiosInstance.get("/hospitals?filters[Premium][$eq]=true&populate=*")
const getnonprehospital=()=>AxiosInstance.get("/hospitals?filters[Premium][$eq]=false&populate=*")
const gethospitalbycatagories=(doc_catagories)=>AxiosInstance.get("/hospitals?filters[doc_catagories][Name][$in]="+doc_catagories+"&populate=*")

const getdoctorList=(doc_catagories)=>AxiosInstance.get("/doctors?filters[doc_catagories][Name][$in]="+doc_catagories+"&populate=*")
const createAppointment=(data)=>AxiosInstance.post("/appointments",data)

const getAllhospital=()=>AxiosInstance.get("/hospitals?populate=*")
const getAllDoctor=()=>AxiosInstance.get("/doctors?populate=*")
const getAppointments=()=>AxiosInstance.get("/appointments?populate=*")
export default{
    getSlider,
    getCatagories,
    getpremiumhospital,
    getnonprehospital,
    gethospitalbycatagories,
    getdoctorList,
    createAppointment,
    getAllhospital,
    getAllDoctor,
    getAppointments
}