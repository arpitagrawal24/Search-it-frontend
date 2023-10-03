/* eslint-disable react/prop-types */

function Summary({ isVisible, summaryData }) {
    return (
        <>
            {isVisible ? (
                <div className="summary">
                    <h4>{summaryData.title}</h4>
                    <div>
                        {summaryData?.paragraphs?.map((paragraph, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="hide"></div>
            )}
        </>
    );
}

export default Summary;
