class Bank {
    customers = new Map();

    register(name, balance, email, password) {
        const id = this.customers.size === 0 ? 1 : Array.from(this.customers.keys()).at(-1) + 1;
        const obj = new Object(
            {
                name: name,
                email: email,
                password: password,
                balance: balance
            }
        );
        this.customers.set(id, obj);
    }

    static authotization(bank, email, password) {
        for (const [key, value] of bank.customers) {
            if (email === value.email && password === value.password) {
                return key
            } else {
                return false;
            }
        }
    }

    withdrawa(email, password, balance) {
        const id = Bank.authotization(this, email, password);
        if (id) {
            let obj = this.customers.get(id);
            if (obj.balance >= balance) {
                obj.balance -= balance;
                console.log(`balancedan ${balance} mablag' yechildi, qoldiq ${obj.balance}`)
            } else {
                console.log(`balanceda yetarli mablag' yo'q`);
            }
        } else {
            console.log(`bunday mijoz topilmadi`)
        }
    }

    deposite(email, password, balance) {
        if (balance > 0) {
            const id = Bank.authotization(this, email, password);
            if (id) {
                let obj = this.customers.get(id);
                obj.balance += balance;
                console.log(`balancedan ${balance} mablag' qo'shildi, qoldiq ${obj.balance}`)
            } else {
                console.log(`bunday mijoz topilmadi`)
            }
        } else {
            console.log('xato summa kiritildi')
        }

    }

    info(email, password) {
        let id = Bank.authotization(this, email, password);
        if (id) {
            let obj = this.customers.get(id);
            console.log(`ismingiz:${obj.name}\nid-ingiz:${id}\nemailingiz:${obj.email}\nparolingiz:${obj.password}\nmabla'ingiz:${obj.balance}`);
        } else {
            console.log(`bunday mijoz topilmadi`)
        }
    }
}

const bank = new Bank()
bank.register('Dinmuhmmad', 555555, 'qosimovmirjalol829@gmail.com', 'q20050901')
bank.deposite('qosimovmirjalol829@gmail.com', 'q20050901', 555556)
bank.info('qosimovmirjalol829@gmail.com', 'q20050901')
bank.withdrawa('qosimovmirjalol829@gmail.com', 'q20050901', 1111)
bank.info('qosimovmirjalol829@gmail.com', 'q20050901')
