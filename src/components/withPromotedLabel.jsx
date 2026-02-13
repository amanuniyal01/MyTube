const withPromotedLabel = (WrappedComponent) => {
    return (props) => {
        return (
            <div className="relative group">

                {/* Badge */}
                <span className="
          absolute top-2 left-2
          bg-gradient-to-r from-yellow-400 to-orange-500
          text-white text-[10px] font-bold
          px-3 py-1
          rounded-2xl
          shadow-lg
          tracking-wider
          z-10
          transition-transform duration-200
          group-hover:scale-110
        ">
                    PROMOTED
                </span>


                <WrappedComponent {...props} />

            </div>
        );
    };
};

export default withPromotedLabel;
