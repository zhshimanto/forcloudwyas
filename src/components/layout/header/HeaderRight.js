import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const HeaderRight = () => {
  return (
    <div className="headerarea__component">
      <div className="headerarea__right">
        <div className="headerarea__button">
          <ButtonPrimary
            text="GET FREE QUOTE"
            path="/contact"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderRight;
