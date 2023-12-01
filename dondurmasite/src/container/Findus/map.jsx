import { useEffect } from "react";
import './map.css';

function GoogleMap(){
    useEffect(() => {
        const iframeData = document.getElementById("iframeId");
        if (iframeData) {
            iframeData.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2169.1651936952535!2d39.4861457306644!3d39.74722391488458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40700d0213181a71%3A0x912880f667f05a75!2sTad%C4%B1%20Moda%20Dondurma%20-%20Tatl%C4%B1!5e0!3m2!1str!2str!4v1692281187886!5m2!1str!2str";
        }
    }, []);

    return (
        <div className="mapapp">
            <iframe
                id="iframeId"
                title="Google Map"
                style={{ height: "650px", width: "550px", border: "0" 
                }}
            />
        </div>
    );
}

export default GoogleMap;
