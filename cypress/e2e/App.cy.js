describe('App E2E', () => {
    it('should have a form', () => {
        cy.visit('/');

        cy.get('[data-test-id="add-new-task-input"]').should('have.value', '');
        cy.get('[data-test-id="add-todo-button"]').should('have.text', 'Add todo');
    });

    it('should add a task', () => {
        cy.get('[data-test-id="add-new-task-input"]').type('Learn React').should('have.value', 'Learn React');
        cy.get('[data-test-id="add-todo-button"]').click();


        cy.get('[data-test-id="todo-item-text"]').should('have.text', 'Learn React');
        cy.get('[data-test-id="add-new-task-input"]').should('have.value', '');
    })
});
