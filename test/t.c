#include <stdio.h>
#include <stdlib.h>
#define SIZE 10
/* Elemento da lista ligada (Você não deve modificar isso) */
typedef struct ELE {
    int value;
    struct ELE *next;
} list_ele_t;

/* Estrutura da fila */
typedef struct {
    list_ele_t *head;  /* Lista ligada de elementos */
    list_ele_t *tail;
	int size_of_queue;
	list_ele_t *element;
    /*
      Você precisará adicionar mais campos a esta estrutura
      para efetivamente implementar q_size e q_insert_tail
    */
} queue_t;

int main () {
    queue_t *q = malloc(sizeof(queue_t));
    /* E se malloc retornar NULL? */
	if (q == NULL) {
		printf("Erro de alocação\n");
		return 0;
	} 
    q->head = NULL;
    q->tail = NULL;
	q->element = (list_ele_t) malloc(sizeof(list_ele_t));

	return 0;
}
