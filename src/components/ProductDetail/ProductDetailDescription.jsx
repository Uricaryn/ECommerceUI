const ProductDescription = ({ description }) => {
  // Gelen description'ı kontrol ediyoruz
  if (!description) {
    return <p>Ürün açıklaması bulunamadı.</p>;
  }

  return (
    <>
      {typeof description === "string" && description.trim() !== "" ? (
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      ) : Array.isArray(description) && description.length > 0 ? (
        description.map((paragraph, index) => (
          <p key={index} className="mb-6 text-gray-500 dark:text-gray-400">
            {paragraph}
          </p>
        ))
      ) : (
        <p>Ürün açıklaması bulunamadı.</p>
      )}
    </>
  );
};

export default ProductDescription;
