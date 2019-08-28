const Timer = require('../../src/Pomodoro-Clock/timer');

console.log('Timer', Timer);

describe('Timer', () => {
    let $item = null;
    let timer = null;

    beforeEach(() => {
        $item = document.createElement('ciasteczko');
        timer = new Timer();
    });

    describe('decreaseElementNumber ', () => {
        it('should reduce value', () => {
            // Arrange
            const daValue = '93';
            $item.textContent = daValue;
            // Act
            timer.decreaseElementNumber($item);
            // Assert
            expect($item.textContent).toEqual('92');
            // Teardown
            // ...
        });
        it('should return MINIMUM when pass 0', () => {
            // Arrange
            // const $item = document.createElement('ciasteczko');
            const daValue = '0';
            $item.textContent = daValue;
            // Act
            timer.decreaseElementNumber($item);
            // Assert
            expect($item.textContent).toEqual('0');
            // Teardown
            // ...
        });
        it('should return MINIMUM when pass 0', () => {
            // Arrange
            // const $item = document.createElement('ciasteczko');
            const daValue = '-1';
            $item.textContent = daValue;
            // Act
            timer.decreaseElementNumber($item);
            // Assert
            expect($item.textContent).toEqual('0');
            // Teardown
            // ...
        });
    });
    describe('increaseElementNumber ', () => {
        it('should increase value', () => {
            // Arrange
            // const $item = document.createElement('ciasteczko');
            const daValue = '13';
            $item.textContent = daValue;
            // Act
            timer.increaseElementNumber($item);
            // Assert
            expect($item.textContent).toEqual('14');
            // Teardown
            // ...
        });
        it('should return MAXIMUM when number out of range', () => {
            // Arrange
            // const $item = document.createElement('ciasteczko');
            const daValue = '93';
            $item.textContent = daValue;
            // Act
            timer.increaseElementNumber($item);
            // Assert
            expect($item.textContent).toEqual('60');
            // Teardown
            // ...
        });
    });
    describe('startTimer ', () => {
        it('should call timeCounter', () => {
            // Arrange
            const $item = document.createElement('ciasteczko');
            jest.spyOn(timer, 'timeCounter');
            timer.startTimer();
            expect(timer.timeCounter).toHaveBeenCalled();
            // Act
            // Assert
            // Teardown
            // ...
        });
    });
});
