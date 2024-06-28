import { useNavigate } from "react-router-dom"

const HomePage = () => {
    const navigate = useNavigate();
    
    return(
        <section className="w-full">
            <div className="cursor-pointer p-4" onClick={() => navigate('/login')}>Trang đăng nhập</div>
            <div className="cursor-pointer p-4" onClick={() => navigate('/register')}>Trang đăng ký</div>
        </section>
    )
}

export default HomePage