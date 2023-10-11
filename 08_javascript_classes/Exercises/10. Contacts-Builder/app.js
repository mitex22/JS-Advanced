class Contact {
    constructor(fn, ln, ph, em) {
        this.firstName = fn;
        this.lastName = ln;
        this.phone = ph;
        this.email = em;
        this._online = false;
    }

    get online() {
        return this._online;
    }

    set online(status) {
        this._online = status;
        let currPhone = this.phone;

        if (this._online === true) {
            let allSpans = Array.from(document.querySelectorAll('span'));
            
            for (const span of allSpans) {
                let domMatch = span.textContent.match(/(\d+)/);
                if (domMatch) {
                    if (domMatch[0] === currPhone.match(/(\d+)/)[0]) {
                        let articleEl = span.parentElement.parentElement;
                        articleEl.querySelector('div').classList.add('online');
                    }
                }
            }
        } else {
            let allSpans = Array.from(document.querySelectorAll('span'));

            for (const span of allSpans) {
                let domMatch = span.textContent.match(/(\d+)/);
                if (domMatch) {
                    if (domMatch[0] === currPhone.match(/(\d+)/)[0]) {
                        let articleEl = span.parentElement.parentElement;
                        articleEl.querySelector('div').classList.remove('online');
                    }
                }
            }
        }
    }

    render(id) {

        let mainDiv = document.querySelector(`#${id}`);

        let newArticle = document.createElement('article');

        let newTitleDiv = document.createElement('div');
        newTitleDiv.classList.add('title');
        let newTitleDivContent = document.createTextNode(`${this.firstName} ${this.lastName}`);
        newTitleDiv.appendChild(newTitleDivContent);

        let newInfoButton = document.createElement('button');
        newInfoButton.innerHTML = '&#8505;';
        newInfoButton.addEventListener('click', function (e) {
            e.stopPropagation();
            let infoDiv = e.currentTarget.parentElement.nextSibling;

            if (infoDiv.style.display === 'none') {
                infoDiv.style.display = 'block';
            } else {
                infoDiv.style.display = 'none';
            }
        });
        newTitleDiv.appendChild(newInfoButton);

        let newInfoDiv = document.createElement('div');
        newInfoDiv.classList.add('info');
        newInfoDiv.style.display = 'none';

        let newPhoneSpan = document.createElement('span');
        newPhoneSpan.innerHTML = `&phone; ${this.phone}`
        let newEmailSpan = document.createElement('span');
        newEmailSpan.innerHTML = `&#9993; ${this.email}`

        newInfoDiv.appendChild(newPhoneSpan);
        newInfoDiv.appendChild(newEmailSpan);

        newArticle.appendChild(newTitleDiv);
        newArticle.appendChild(newInfoDiv);

        mainDiv.appendChild(newArticle);
    }
}

