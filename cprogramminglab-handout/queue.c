/*
 * Código para diagnostico de conhecimento básico em C.
 * Desenvolvido para o curso CET-088, CET-082
 * Modificado por Leard Fernandes, 2017
 * Developed by R. E. Bryant, 2017
*/

 /*
  * Este programa implementa uma fila que suporta ambas as operações FIFO e LILO.
  *
  * Ele utiliza uma lista unicamente ligada para representar o conjunto de
  * elementos da fila
*/

#include <stdlib.h>
#include <stdio.h>

#include "harness.h"
#include "queue.h"

/*
  Cria uma fila vazia.
  Retorna NULL se o espaço na puder ser alocado.
*/
queue_t *q_new()
{
    queue_t *q =  malloc(sizeof(queue_t));
    /* E se malloc retornar NULL? */
	if (q == NULL) {
		printf("Erro de alocação\n");
		return 0;
	} 
	q->size_of_queue = 0;
    q->head = NULL;
    return q;
}

/*  Libera todo o espaço utilizado pela fila. */
void q_free(queue_t *q)
{
    /* Como liberar os elementos da lista? */
    /* Libera a estrutura da fila */
	/* list_ele_t *aux; */
	free(q);
}

/*
  Tenta inserir o elemento na cabeça da fila.
  Retorna true se houve sucesso
  Retorna false se q é NULL ou não foi possível alocar espaço
*/
bool q_insert_head(queue_t *q, int v)
{
    /* O que você deverá fazer se q é NULL ? */
	if (!q) return false;
    list_ele_t *newh;
    newh = malloc(sizeof(list_ele_t));
    /* E se malloc retornar NULL? */
	if (!newh) return false;
    newh->value = v;
    newh->next = q->head;
	if (q->size_of_queue == 0) q->tail = newh;
    q->head = newh;
	q->size_of_queue += 1;
    return true;
}


/*
  Tenta inserir o elemento na calda da fila.
  Retorna true se houve sucesso
  Retorna false se q é NULL ou não foi possível alocar espaço
*/
bool q_insert_tail(queue_t *q, int v)
{
    /* Você precisa escrever o código completo para esta função */
    /* lembre-se: Você deverá operar no tempo de O(1) */
	if (!q) return false;
    list_ele_t *newh;
    newh = malloc(sizeof(list_ele_t));
    /* E se malloc retornar NULL? */
	if (!newh) return false;
    newh->value = v;
    newh->next = NULL;
	if (q->size_of_queue == 0) q->head = newh;
    q->tail = newh;
	q->tail->next = newh;
	q->size_of_queue += 1;
    return true;
    /* return false; */
}

/*
  Tenta remover o elemento na cabeça da fila.
  Retorna true se houve sucesso
  Retorna false se q é NULL ou vazia
  Se vp é não-NULL e o elemento removido, armazena o valor removido em *vp
  Qualquer armazenamento não utilizado deve ser liberado
*/
bool q_remove_head(queue_t *q, int *vp)
{
	if (!q || q->size_of_queue == 1) return false;
    /* Você precisa consertar este código. */
	if (vp) {
		*vp = q->head->value;
		q->head = q->head->next;
	}
    return true;
}

/*
  Retorna o número de elementos na fila.
  Retorna 0 se q é NULL ou vazia
*/
int q_size(queue_t *q)
{
  /* Você precisa escrever o código completo para esta função */
  /* lembre-se: Você deverá operar no tempo de O(1) */
    return 0;
}

/*
  Inverte os elementos na fila.

  Sua implementação não dever alocar ou liberar quaisquer elementos (e.g., pela
  chamada de q_insert_head ou q_remove_head). Ao invés disso, ela deverá
  modificar os ponteiros na estrutura de dados existente.
*/
void q_reverse(queue_t *q)
{
    /* Você precisa escrever o código completo para esta função */
}
