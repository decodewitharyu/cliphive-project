import React, { useState, useCallback } from 'react';
import { Upload, X, Check, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const UploadComponent = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState('idle'); // idle, uploading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  }, []);

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleFiles = (files) => {
    // Validate file types
    const allowedTypes = ['video/mp4', 'audio/mpeg', 'image/png', 'image/jpeg'];
    const maxSize = 100 * 1024 * 1024; // 100MB in bytes

    const invalidTypeFiles = files.filter(file => !allowedTypes.includes(file.type));
    const oversizedFiles = files.filter(file => file.size > maxSize);

    if (invalidTypeFiles.length > 0 || oversizedFiles.length > 0) {
      let errorMsg = [];
      if (invalidTypeFiles.length > 0) {
        errorMsg.push('Some files were rejected. Only MP4, MP3, PNG, and JPEG files are allowed.');
      }
      if (oversizedFiles.length > 0) {
        errorMsg.push(`Files must be smaller than ${formatFileSize(maxSize)}.`);
      }
      setErrorMessage(errorMsg.join(' '));
      return;
    }

    // Clear any previous errors
    setErrorMessage('');
    
    // Simulate upload
    setUploadStatus('uploading');
    simulateUpload();
  };

  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadStatus('success');
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div
        className={`relative border-2 border-dashed rounded-lg p-12 text-center ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple
          className="hidden"
          id="file-upload"
          onChange={handleFileInput}
          accept=".mp4,.mp3,.png,.jpg,.jpeg"
        />
        
        <Upload className={`w-12 h-12 mx-auto mb-4 ${isDragging ? 'text-blue-500' : 'text-gray-400'}`} />
        
        <label
          htmlFor="file-upload"
          className="block text-sm font-medium text-gray-700 mb-2 cursor-pointer"
        >
          <span className="text-blue-500 hover:text-blue-600">Click to upload</span> or drag and drop
        </label>
        <p className="text-xs text-gray-500">MP4, MP3, PNG, JPEG up to 100MB</p>

        {/* Upload Progress */}
        {uploadStatus === 'uploading' && (
          <div className="mt-6">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                    Uploading
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-blue-600">
                    {uploadProgress}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div
                  style={{ width: `${uploadProgress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        )}

        {/* Success State */}
        {uploadStatus === 'success' && (
          <div className="mt-6">
            <div className="bg-green-100 text-green-800 rounded-lg p-4 flex items-center">
              <Check className="w-5 h-5 mr-2" />
              <span>Upload complete! Awaiting approval.</span>
            </div>
          </div>
        )}

        {/* Error Message */}
        {errorMessage && (
          <Alert variant="destructive" className="mt-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default UploadComponent;