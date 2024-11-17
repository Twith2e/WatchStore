import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [image, setImage] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5000/user/verify-token", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, []);

  const handleChange = (e) => {
    const image = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  const handleUpload = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/user/upload-image",
        { image },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      if (res.data.status) {
        alert("Image uploaded successfully");
        console.log(res);
      }
    } catch (error) {}
  };

  return (
    <div>
      <input onChange={handleChange} type="file" />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
