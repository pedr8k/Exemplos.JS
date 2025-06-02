const swap = (vetor, i, j) => {
    const temp = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = temp;
};
const shuffle = (vetor, trocas) => {
    for (let i = 0; i < trocas; i++) {
        const pos1 = Math.floor(Math.random() * vetor.length);
        const pos2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, pos1, pos2);
    }
};
const bubble_sort = (vetor) => {
    for (let i = 0; i < vetor.length - 1; i++) {
        for (let j = 0; j < vetor.length - 1 - i; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
};
const selection_sort = (vetor) => {
    for (let i = 0; i < vetor.length - 1; i++) {
        let menor = i;
        for (let j = i + 1; j < vetor.length; j++) {
            if (vetor[j] < vetor[menor]) {
                menor = j;
            }
        }
        if (menor !== i) {
            swap(vetor, i, menor);
        }
    }
};
const particionamento = (vetor, inicio, fim, pivot) => {
    let i = inicio;
    let j = fim;

    while (i <= j) {
        while (vetor[i] < pivot) i++;
        while (vetor[j] > pivot) j--;

        if (i <= j) {
            swap(vetor, i, j);
            i++;
            j--;
        }
    }

    return i;
};
const quick_sort = (vetor, inicio, fim) => {
    if (inicio >= fim) return;

    const meio = Math.floor((inicio + fim) / 2);
    const pivot = vetor[meio];
    const index = particionamento(vetor, inicio, fim, pivot);

    quick_sort(vetor, inicio, index - 1);
    quick_sort(vetor, index, fim);
    

};
window.bubble_sort = bubble_sort;
window.selection_sort = selection_sort;
window.quick_sort = quick_sort;
window.shuffle = shuffle;