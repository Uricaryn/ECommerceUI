import React, { useState, useEffect } from "react";
import { getUserProfile, updateUserProfile } from "../../api/users";
import { showSuccessToast, showErrorToast } from "../../utils/toastUtils";

const Profile = () => {
  const [user, setUser] = useState({
    nameSurname: "",
    userName: "",
    email: "",
    phoneNumber: "",
    address: "",
    bio: "",
    dateOfBirth: "",
    profileImageUrl: "",
  });

  const [loading, setLoading] = useState(true);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        
        const profileData = await getUserProfile();
        setUser(profileData);
        setPreviewImage(profileData.profileImageUrl); // Kullanıcı profil resmini önizleme olarak ayarla
      } catch (error) {
        showErrorToast("Kullanıcı profili alınamadı!");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    // Eğer profil resminin URL'si değiştirilmişse, önizlemeyi de güncelle
    if (name === "profileImageUrl") {
      setPreviewImage(value);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(user);
      showSuccessToast("Profil başarıyla güncellendi!");
    } catch (error) {
      showErrorToast("Profil güncellenirken bir hata oluştu!");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center mt-4 min-h-[calc(100vh-13rem)]">
      <div className="w-full max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <h5 className="text-2xl font-medium text-gray-900 dark:text-white text-center mb-4">
            Profil Bilgileri
          </h5>

          <div className="text-center mb-4">
            {previewImage ? (
              <img
                src={previewImage}
                alt="Profil Resmi"
                className="w-24 h-24 rounded-full mx-auto mb-2 object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full mx-auto mb-2 bg-gray-200 dark:bg-gray-600"></div>
            )}
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Profil Resmi URL
            </label>
            <input
              type="url"
              name="profileImageUrl"
              value={user.profileImageUrl}
              onChange={handleInputChange}
              placeholder="https://example.com/image.jpg"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Ad Soyad
            </label>
            <input
              type="text"
              name="nameSurname"
              value={user.nameSurname}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Kullanıcı Adı
            </label>
            <input
              type="text"
              name="userName"
              value={user.userName}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              E-posta
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Telefon Numarası
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={user.phoneNumber}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Adres
            </label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Biyografi
            </label>
            <textarea
              name="bio"
              value={user.bio}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              rows="3"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Doğum Tarihi
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={user.dateOfBirth ? user.dateOfBirth.substring(0, 10) : ""}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Güncelle
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
