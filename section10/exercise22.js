// アロー関数はどこでも使っていいわけではない

const profile = {
    name: '太郎',
    getName() {
        return this.name;
    }
};
