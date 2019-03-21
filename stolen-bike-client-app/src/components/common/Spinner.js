import React from 'react';

export default () => {
    return (
        <div className="spinner-wrap">
            <svg className="lds-blocks" viewBox="0 0 100 100"><rect x="19" y="19" width="20" height="20" fill="#eef5ff">
                <animate attributeName="fill" values="#c8d4dd;#eef5ff;#eef5ff" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0s" calcMode="discrete"></animate>
            </rect><rect x="40" y="19" width="20" height="20" fill="#eef5ff">
                    <animate attributeName="fill" values="#c8d4dd;#eef5ff;#eef5ff" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.125s" calcMode="discrete"></animate>
                </rect><rect x="61" y="19" width="20" height="20" fill="#eef5ff">
                    <animate attributeName="fill" values="#c8d4dd;#eef5ff;#eef5ff" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.25s" calcMode="discrete"></animate>
                </rect><rect x="19" y="40" width="20" height="20" fill="#eef5ff">
                    <animate attributeName="fill" values="#c8d4dd;#eef5ff;#eef5ff" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.875s" calcMode="discrete"></animate>
                </rect><rect x="61" y="40" width="20" height="20" fill="#eef5ff">
                    <animate attributeName="fill" values="#c8d4dd;#eef5ff;#eef5ff" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.375s" calcMode="discrete"></animate>
                </rect><rect x="19" y="61" width="20" height="20" fill="#eef5ff">
                    <animate attributeName="fill" values="#c8d4dd;#eef5ff;#eef5ff" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.75s" calcMode="discrete"></animate>
                </rect><rect x="40" y="61" width="20" height="20" fill="#eef5ff">
                    <animate attributeName="fill" values="#c8d4dd;#eef5ff;#eef5ff" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.625s" calcMode="discrete"></animate>
                </rect><rect x="61" y="61" width="20" height="20" fill="#eef5ff">
                    <animate attributeName="fill" values="#c8d4dd;#eef5ff;#eef5ff" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.5s" calcMode="discrete"></animate>
                </rect>
            </svg>
        </div>
    );
};
