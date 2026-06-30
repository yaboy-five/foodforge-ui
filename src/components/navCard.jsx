function NavCard({ title, description, onClick }) {
    return (
        <div
            onClick={onClick}
            style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "10px",
                cursor: "pointer",
                marginBottom: "10px",
                transition: "0.2s"
            }}
        >
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default NavCard;