import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

/*
 * サンプルテスト
 */
describe('サンプルテスト', () => {
    test('[異常系]サンプルテスト', async () => {
        // 実行
        render(<App />);

        // 検証
        expect(screen.getByText('React')).toBeInTheDocument();
    });
});
