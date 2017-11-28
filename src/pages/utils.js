const loadingAnimation = `
    <div style="display:flex;margin:auto;" class="lds-ripple">
        <div></div>
        <div></div>
    </div>
    <style type="text/css">
    @keyframes lds-ripple {
        0% {
            top: 96px;
            left: 96px;
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            top: 8px;
            left: 8px;
            width: 176px;
            height: 176px;
            opacity: 0;
        }
    }
    @-webkit-keyframes lds-ripple {
        0% {
            top: 96px;
            left: 96px;
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            top: 8px;
            left: 8px;
            width: 176px;
            height: 176px;
            opacity: 0;
        }
    }
    .lds-ripple {
        position: relative;
    }
    .lds-ripple div {
        box-sizing: content-box;
        position: absolute;
        border-width: 4px;
        border-style: solid;
        opacity: 1;
        border-radius: 50%;
        -webkit-animation: lds-ripple 1.1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        animation: lds-ripple 1.1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    .lds-ripple div:nth-child(1) {
        border-color: #5e6d82;
    }
    .lds-ripple div:nth-child(2) {
        border-color: #aaaaaa;
        -webkit-animation-delay: -0.55s;
        animation-delay: -0.55s;
    }
    .lds-ripple {
        width: 200px !important;
        height: 200px !important;
        -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
        transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
    }
    </style>
`

export default loadingAnimation
