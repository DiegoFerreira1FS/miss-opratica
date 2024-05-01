// Função para trocar os valores de duas posições de um vetor
const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

// Função para embaralhar os elementos de um vetor
const shuffle = (arr, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        let randomIndex1 = Math.floor(Math.random() * arr.length);
        let randomIndex2 = Math.floor(Math.random() * arr.length);
        swap(arr, randomIndex1, randomIndex2);
    }
};

// Função Bubble Sort para ordenar um vetor de inteiros
const bubble_sort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
};

// Função Selection Sort para ordenar um vetor de inteiros
const selection_sort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(arr, i, minIndex);
        }
    }
};

// Função Quick Sort para ordenar um vetor de inteiros
const quick_sort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);
        quick_sort(arr, left, pivotIndex - 1);
        quick_sort(arr, pivotIndex + 1, right);
    }
};

// Função de particionamento (auxiliar para o Quick Sort)
const partition = (arr, left, right) => {
    const pivot = arr[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, right);
    return i + 1;
};
